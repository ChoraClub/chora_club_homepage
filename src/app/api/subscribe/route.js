// src/app/api/subscribe/route.js
import { sendMail, compileNewsletterTemplate } from "@/libs/mail";
import { connectDB } from "@/config/dbConnect";

// MongoDB collection name
const collectionName = process.env.COLLECTION;

export async function POST(request) {
  try {
    // Get the email from the request body
    const { email } = await request.json();

    // Connect to MongoDB
    // const client = new MongoClient(uri);
    const client = await connectDB();

    // Get the database and collection
    const database = client.db();
    const collection = database.collection(collectionName);

    // Check if the email already exists in the collection
    const existingSubscriber = await collection.findOne({ email });
    console.log(existingSubscriber);

    if (existingSubscriber) {
      // Email already exists, return a response
      client.close();
      return new Response("Email already subscribed", { status: 400 });
    }

    // Insert the new email into the collection
    await collection.insertOne({ email });

    try {
      await sendMail({
        to: email,
        name: "Chora Club",
        subject: "Newsletter Subscribe",
        body: compileNewsletterTemplate(),
      });
    } catch (error) {
      console.log("Error sending mail", error);
    }

    // Close the MongoDB connection
    client.close();

    // Return a success response
    return new Response("Subscription successful", { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
