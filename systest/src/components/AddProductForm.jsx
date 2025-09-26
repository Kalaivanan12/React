import React, { useState } from "react";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Validate form
  const validateForm = () => {
    const { title, price, description, image, category } = formData;
    if (!title || !price || !description || !image || !category) {
      setMessage("⚠️ All fields are required!");
      return false;
    }
    if (parseFloat(price) <= 0) {
      setMessage("⚠️ Price must be a positive number!");
      return false;
    }
    setMessage("");
    return true;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({
          title: formData.title,
          price: parseFloat(formData.price),
          description: formData.description,
          image: formData.image,
          category: formData.category,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log("New Product:", data);

      setMessage("✅ Product added successfully!");
      setFormData({
        title: "",
        price: "",
        description: "",
        image: "",
        category: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      setMessage("❌ Failed to add product.");
    }
  };

  return (
    <section className="add-product">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="title"
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          id="price"
          type="number"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <textarea
          id="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          id="image"
          type="url"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          id="category"
          type="text"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
      {message && <p className="message">{message}</p>}
    </section>
  );
};

export default AddProductForm;
