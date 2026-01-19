import { Request, Response } from 'express';
import { ProductService } from '../services/product.services';
import { productValidationSchema } from '../validations/product.validation';
import { success } from 'zod';

/**
 * Create a new product
 * POST /api/products
 */
const createProduct = async (req: Request, res: Response) => {
  try {
    const validatedData = productValidationSchema.parse(req.body);
    const result = await ProductService.createProductIntoDB(validatedData);

    res.status(202).json({
      success: true,
      message: 'Product Created Successfully',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Product creation failed',
    });
  }
};


//  Get All Products
const getAllProduct = async (req:Request, res:Response) => {
    try{
        const result = await ProductService.getAllProductsFromDB();

        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: result,
        }) 
    } catch (err){
            res.status(500).json({
                success: false,
                message: 'Failed to fetch products'
            })
        }

}

// Get Single Product
const getSingleProduct = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const result = await ProductService.getSingleProductFromDB(id);

        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: result
        })
    } catch (err){
        res.status(500).json({
                success: false,
                message: 'Failed to fetch product'
            })
    }
}


// Update Product
const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const validationData = productValidationSchema.parse(req.body);

    const result = await ProductService.updateProductIntoDB( 
        id,
        validationData
    );

    res.status(200).json({
        success: true,
        message: "Product updated successfully",
        data: result
    })
}

export const ProductController = {
  createProduct,
};
