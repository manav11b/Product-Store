import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async(request,response) => {

    try {
        const pruducts = await  Product.find();
        response.status(200).json({success : true, data : pruducts});

    } catch (error) {
        console.error("Error fetching products!", error.message);
        response.status(500).json({ success : false, message : "Server Error!"});
    }
};

export const createProduct = async(request,response) => {
    const product = request.body;

    if(!product.name || !product.price || !product.image){
        return response.status(400).json({success : false, message : "Please Enter all the fields."});
    }

    const newProduct = new Product(product);
    try{
        await newProduct.save();
        response.status(201).json({success : true, data : newProduct});
    }catch(error){
        console.error("Product not saved!", error.message);
        response.status(500).json({ success : false, message : "Server Error!"});
    }
};

export const deleteProduct = async(request,response) => {
    const {id} = request.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return response.status(404).json({ success : false, message : "Invalid Product ID!"});
    }
    try {
        await Product.findByIdAndDelete(id);
        response.status(200).json({success : true, message : "Product Deleted!"});  
    } catch (error) {
        response.status(500).json({ success : false, message : "Server Error!"});   
    }
};

export const updateProduct = async(request,response) => {
    const {id} = request.params;
    const product = request.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return response.status(404).json({ success : false, message : "Product not found!"});
    } 

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,product, {new: true});    
        response.status(200).json({success : true, data : updatedProduct});

    } catch (error) {

        console.error("Error updating product!", error.message);
        response.status(500).json({ success : false, message : "Server Error!"});
    }
};
