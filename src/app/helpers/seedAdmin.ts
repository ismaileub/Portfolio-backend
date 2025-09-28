import { User } from "../models/user.model";
import bcrypt from "bcryptjs";

export async function seedAdmin() {
  try {
    const adminEmail = process.env.ADMIN_EMAIL as string;
    const adminPass = process.env.ADMIN_PASS as string;

    const existingAdmin = await User.findOne({ email: adminEmail });
    if (!existingAdmin) {
      const hashedPass = await bcrypt.hash(adminPass, 10);
      await User.create({
        email: adminEmail,
        password: hashedPass,
      });
      console.log(`✅ Admin created: ${adminEmail}`);
    } else {
      console.log(`ℹ️ Admin already exists: ${adminEmail}`);
    }
  } catch (err) {
    console.error("❌ Error seeding admin:", err);
  }
}
