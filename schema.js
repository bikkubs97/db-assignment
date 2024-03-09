import {  Schema, model } from "mongoose";

//product schema

const ProductSchema = new Schema({
  _id: {
    type: ObjectId,
    auto: true,
  },
  name: {
    type: String,
    required: true,
  },
  desc: String,
  sku: String,
  category: {
    type: Schema.Types.ObjectId, //primary key of the product category collection
    ref: "ProductCategory", // References the product category collection
  },
  inventory: {
    type: Schema.Types.ObjectId, //primary key of the product inventory colleciton.
    ref: "ProductInventory", // References the product inventory collection
  },
  price: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  dicount_id: {
    type: Schema.Types.ObjectId, //primary key of dicount collection.
    ref: "Discount", //references the dicount collection.
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
    default: Date.now,
  },
});

//product category schema

const ProductCategorySchema = new Schema({
  _id: {
    type: ObjectId,
    auto: true,
  },
  name: {
    type: String,
    required: true,
  },
  desc: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
    default: Date.now,
  },
});

const ProductInventorySchema = new Schema({
  _id: {
    type: ObjectId,
    auto: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
    default: Date.now,
  },
});

const DiscountSchema = new Schema({
  _id: {
    type: ObjectId,
    auto: true,
  },
  name: {
    type: String,
    required: true,
  },
  desc: String,
  dicountPercent: Number,
  active: Boolean,
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
    default: Date.now,
  },
});

//exporting models based on schemas.
export const Product = model("Product", ProductSchema);
export const ProductCategory = model("ProductCategory", ProductCategorySchema);
export const ProductInventory = model(
  "ProductInventory",
  ProductInventorySchema
);
export const Discount = model("Discount", DiscountSchema);
