const Category = require("../models/Category");

// create Category ka handler function

exports.createCategory = async (req, res) => {
    try{
        const {name, description} = req.body;
        if(!name || !description) {
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            })
        }
        //create entry in DB
        const categoryDetails = await Category.create({
            name:name,
            description:description,
        });
        console.log(categoryDetails);
        //return response

        return res.status(200).json({
            success:true,
            message:"Category Created Successfully",
        })
    }
    catch(error)
    {
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
};

//getAllcategories handler function

exports.showAllcategories = async (req, res) => {
    try{
        console.log("object")
        const allCategories = await Category.find({}, {name:true, description:true});
        console.log(allCategories)
        res.status(200).json({
            success:true,
            message:"All Categoriess returned successfully",
            allCategories,
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

//categoryPageDetails

exports.categoryPageDetails = async (req, res) => {
    try{
        //get categoryId
        const {categoryId} = req.body;
        //get courses for specifed categoryId
        const selectCategory = await Category.findById(categoryId)
                                        .populate("courses")
                                        .exec();
        //validation
        if(!selectedCategory) {
            return res.status(404).json({
                success:false,
                message:"Data Not Found",
            })
        }
        //get courses for different categories
        const differentCategories = await Category.find({
            _id: {$ne: categoryId},
        })
        .populate("courses")
        .exec();
        
        //HW //get top selling course
        //return response 
        return res.status(200).json({
            success:true,
            data: {
                selectCategory,
                differentCategories,
            },
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}


//add course to category
exports.addCourseToCategory = async (req, res) => {
	const { courseId, categoryId } = req.body;
	// console.log("category id", categoryId);
	try {
		const category = await Category.findById(categoryId);
		if (!category) {
			return res.status(404).json({
				success: false,
				message: "Category not found",
			});
		}
		const course = await Course.findById(courseId);
		if (!course) {
			return res.status(404).json({
				success: false,
				message: "Course not found",
			});
		}
		if(category.courses.includes(courseId)){
			return res.status(200).json({
				success: true,
				message: "Course already exists in the category",
			});
		}
		category.courses.push(courseId);
		await category.save();
		return res.status(200).json({
			success: true,
			message: "Course added to category successfully",
		});
	}
	catch (error) {
		return res.status(500).json({
			success: false,
			message: "Internal server error",
			error: error.message,
		});
	}
}