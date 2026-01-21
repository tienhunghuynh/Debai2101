
// --- CÂU 1: Khai báo constructor function Product ---
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// --- CÂU 2: Khởi tạo mảng products ---
const products = [
    new Product(1, "iPhone 15 Pro", 35000000, 10, "Electronics", true),
    new Product(2, "Samsung Galaxy S24", 28000000, 5, "Electronics", true),
    new Product(3, "MacBook Air M2", 31000000, 0, "Electronics", false),
    new Product(4, "AirPods Pro", 5000000, 20, "Accessories", true),
    new Product(5, "Logitech Mouse", 1000000, 50, "Accessories", true),
    new Product(6, "Mechanical Keyboard", 2500000, 0, "Accessories", true)
];
console.log("--- DANH SÁCH SẢN PHẨM GỐC ---");
console.log(products);

// --- CÂU 3: Tạo mảng mới chỉ chứa name và price ---
const nameAndPrice = products.map(product => ({
    name: product.name,
    price: product.price
}));
console.log("\n--- CÂU 3: Name & Price ---", nameAndPrice);

// --- CÂU 4: Lọc sản phẩm còn hàng  ---
const availableProducts = products.filter(product => product.quantity > 0);
console.log("\n--- CÂU 4: Sản phẩm còn hàng ---", availableProducts);

// --- CÂU 5: Kiểm tra có sản phẩm giá trên 30.000.000 ---
const hasExpensiveProduct = products.some(product => product.price > 30000000);
console.log(`\n--- CÂU 5: Có sản phẩm > 30tr không? -> ${hasExpensiveProduct}`);

// --- CÂU 6: Kiểm tra tất cả sản phẩm danh mục "Accessories" ---
const accessories = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessories.every(p => p.isAvailable === true);
console.log(`\n--- CÂU 6: Tất cả Accessories đang bán? -> ${allAccessoriesAvailable}`);

// --- CÂU 7: Tính tổng giá trị kho hàng ---
const totalInventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);
const formattedTotal = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalInventoryValue);
console.log(`\n--- CÂU 7: Tổng giá trị kho hàng -> ${formattedTotal}`);

// --- CÂU 8: Dùng for...of in ra thông tin ---
console.log("\n--- CÂU 8: Duyệt mảng (for...of) ---");
for (const product of products) {
    console.log(`Sản phẩm: ${product.name} | Danh mục: ${product.category} | Trạng thái: ${product.isAvailable}`);
}

// --- CÂU 9: Dùng for...in in ra tên thuộc tính và giá trị ---
console.log("\n--- CÂU 9: Duyệt thuộc tính sản phẩm đầu tiên (for...in) ---");
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`Thuộc tính: ${key} : ${firstProduct[key]}`);
}

// --- CÂU 10: Lấy tên các sản phẩm đang bán và còn hàng ---
const result10 = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.log("\n--- CÂU 10: SP đang bán & còn hàng ---", result10);