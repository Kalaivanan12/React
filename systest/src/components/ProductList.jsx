import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  const [popup, setPopup] = useState({ show: false, message: "", success: true });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setFiltered(data);
      setCategories(["all", ...new Set(data.map((p) => p.category))]);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
      setLoading(false);
    }
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setFiltered(category === "all" ? products : products.filter((p) => p.category === category));
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
    let sorted = [...filtered];
    if (criteria === "price-asc") sorted.sort((a, b) => a.price - b.price);
    else if (criteria === "price-desc") sorted.sort((a, b) => b.price - a.price);
    setFiltered(sorted);
  };

  const toggleForm = () => setShowForm(!showForm);

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const validateForm = () => {
    const { title, price, description, category } = formData;
    if (!title || !price || !description || !category) {
      showPopup("⚠️ All fields are required!", false);
      return false;
    }
    if (parseFloat(price) <= 0) {
      showPopup("⚠️ Price must be a positive number!", false);
      return false;
    }
    return true;
  };

  const showPopup = (message, success = true) => {
    setPopup({ show: true, message, success });
    setTimeout(() => setPopup({ ...popup, show: false }), 3000);
  };

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
          category: formData.category,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const newProduct = await res.json();

      setProducts([...products, newProduct]);
      setFiltered([...filtered, newProduct]);
      setFormData({ title: "", price: "", description: "", category: "" });
      setShowForm(false);
      showPopup("Product added successfully!☻", true);
    } catch (err) {
      console.error("Error adding product:", err);
      showPopup("Failed to add product.☺", false);
    }
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <section className="products">
      <h2>Product Management</h2>

      {/* Popup */}
      {popup.show && (
        <div className={`popup ${popup.success ? "success" : "error"}`}>
          {popup.message}
        </div>
      )}

      {/* Top Controls */}
      <div className="top-controls">
        <button className="add-btn" onClick={toggleForm}>
          {showForm ? "Cancel" : "Add Product"}
        </button>

        <div className="controls">
          <select value={selectedCategory} onChange={(e) => handleFilter(e.target.value)}>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>

          <select value={sortBy} onChange={(e) => handleSort(e.target.value)}>
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
          </select>
        </div>
      </div>

      {/* Add Product Form */}
      {showForm && (
        <form className="add-form" onSubmit={handleSubmit}>
          <input id="title" type="text" placeholder="Title" value={formData.title} onChange={handleChange} />
          <input id="price" type="number" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange} />
          <textarea id="description" placeholder="Description" value={formData.description} onChange={handleChange} />
          <input id="category" type="text" placeholder="Category" value={formData.category} onChange={handleChange} /><br />
          <button type="submit" className="submit-btn">Save Product</button>
        </form>
      )}

      {/* Products Table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price ($)</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td>{p.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProductList;
