const mongoose=require("mongoose");
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI||"mongodb+srv://pranesha182004:L1Q74WfXptjwuPut@krishnapulse.e2mgj6f.mongodb.net/?retryWrites=true&w=majority&appName=krishnapulse", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit the process with failure
    }
};
module.exports = dbConnect;