const mongoose = require("mongoose");
const path = require("path");

// 현재 DB_CONNECT가 myContacts/routes/.env에 있으므로 경로를 명시합니다.
require("dotenv").config({
  path: path.resolve(__dirname, "../routes/.env"),
});

const dbConnect = async () => {
  if (!process.env.DB_CONNECT) {
    throw new Error("DB_CONNECT 환경변수가 설정되지 않았습니다.");
  }

  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("DB connected");
  } catch (err) {
    console.error("DB connection failed:", err.message);
  }
};

module.exports = dbConnect;
