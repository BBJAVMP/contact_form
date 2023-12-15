"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
app.post('/submit', (req, res) => {
    const { firstname, lastname, email, country, subject } = req.body;
    if (!isValidInput(firstname) || !isValidInput(lastname) || !isValidEmail(email)) {
        res.status(400).send('Invalid input data');
        return;
    }
    res.send('Form submitted successfully');
});
function isValidInput(value) {
    return value.trim() !== '' && value.length >= 3;
}
function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});
const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
