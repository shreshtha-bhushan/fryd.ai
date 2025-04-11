import { Svix } from "svix";
import {Webhook} from Svix;
import connectDB from "@/config/db";
import User from "@/models/user";
import { convertCompilerOptionsFromJson } from "typescript";
export async function POST(req) {
    const headerPayload = await headers();
    const wh = new Webhook(process.env.SIGNING_SECRET);
    const svixHeaders = {
        'svix-id': headerPayload.get('svix-id'),
        'svix-signature': headerPayload.get('svix-signature'),
    };
    
    // Get the payload and verify it

    const payload = await req.json();
    const body = JSON.stringify(payload);
    const {data, type} = wh.verify(body, svixHeaders);
        
    // Prepare the user data to be saved in the database

    const userData = {
        clerkId: data.id,
        email: data.email_addresses[0].email_address,
        name: data.first_name + ' ' + data.last_name,
        image: data.image_url,
    };
    
    await connectDB();

    switch(type) {
        case 'user.created':
            await User.create(userData);
            break;

        case 'user.updated':
            await User.findOneAndUpdate({clerkId: data.id}, userData, {new: true});
            break;

        case 'user.deleted':
            await User.findOneAndDelete({clerkId: data.id});
            break;

        default:
            console.log(`Unhandled event type ${type}`);
    }

    return new Response('Webhook processed successfully', {status: 200});

}
