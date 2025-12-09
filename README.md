# 🧮 Numbering System Calculator

A simple, user-friendly calculator built with HTML, CSS, and Vanilla JavaScript to convert numbers between Binary, Octal, Decimal, and Hexadecimal systems.

## ✨ Features

* **Bidirectional Conversion:** Convert numbers from any selected base (2, 8, 10, or 16) to all three other bases simultaneously.
* **Vanilla JavaScript:** Clean, dependency-free implementation for core logic.
* **Responsive Design:** Optimized layout for desktop and mobile devices (using CSS).
* **Input Validation:** Ensures the entered number is valid for the selected source base (e.g., prevents entering '2' in a Binary input).

## 🚀 Live Demo
<<<<<<< HEAD

Live (GitHub Pages): https://biswazit2006.github.io/Numbering-System-Calculator----Vanila_JavaScript/

=======
Live (GitHub Pages): https://biswazit2006.github.io/Numbering-System-Calculator----Vanila_JavaScript/
>>>>>>> ce4329d12cf6e28e5b23b36fcbee2e58c8816ab5
## 📸 Screenshots

A visual representation of the application interface on different devices.

### **Desktop View**

![Screenshot of the Numbering System Calculator desktop interface showing the main input and conversion results.](assets/screenshot_desktop.png)

### **Mobile View**

![Screenshot of the Numbering System Calculator responsive mobile interface.](assets/screenshot_mobile.png)

## 🛠️ Technologies Used

* **HTML5:** Structure and content.
* **CSS3:** Styling and layout (Flexbox/Grid).
* **Vanilla JavaScript (ES6+):** Core conversion logic and DOM manipulation.

## 📁 Project Structure

The project follows a standard front-end structure:
## 💻 How to Run Locally

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/YourUsername/Numbering-System-Calculator.git](https://github.com/YourUsername/Numbering-System-Calculator.git)
    ```
2.  **Navigate to the Directory:**
    ```bash
    cd Numbering-System-Calculator
    ```
3.  **Open `index.html`:** Simply open the `index.html` file in your web browser (e.g., double-click it) to run the application.

## 💡 Conversion Logic Overview

The core conversion process implemented in `script.js` works as follows:

1.  **Input:** Takes the input string and the `sourceBase` (2, 8, 10, or 16).
2.  **Base $B$ to Decimal (Base 10):** Uses `parseInt(inputNum, sourceBase)` to convert the input into its Decimal (Base 10) representation.
3.  **Decimal to Target Base $X$:** Uses the built-in JavaScript method `decimalValue.toString(targetBase)` to convert the Decimal value into the Binary (2), Octal (8), and Hexadecimal (16) strings.
4.  **Output:** Updates the corresponding HTML elements with the converted values.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/YourUsername/Numbering-System-Calculator/issues).

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

<<<<<<< HEAD
**Biswazit Biswas**

* GitHub: [@biswazit2006](https://github.com/YourUsername)
* Facebook: [@biswazit2006](https://facebook.com/YourUsername)
* LinkedIn: [@biswazit2006](https://linkedin.com/YourUsername)
* [\[Optional: Link to your Portfolio/LinkedIn\]](https://biswazit.kesug.com/)
=======
**[Your Name/GitHub Handle]**

* GitHub: [@YourUsername](https://github.com/YourUsername)
* [Optional: Link to your Portfolio/LinkedIn]
>>>>>>> ce4329d12cf6e28e5b23b36fcbee2e58c8816ab5
