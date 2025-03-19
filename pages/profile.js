import { useState } from "react";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";

export default function ProfileSetup() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const router = useRouter();

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      try {
        await setDoc(doc(db, "users", user.uid), {
          name,
          age: parseInt(age),
          bio,
          email: user.email,
        });
        router.push("/dashboard");
      } catch (error) {
        console.error("Error saving profile:", error.message);
      }
    }
  };

  return (
    <div>
      <h1>Set Up Your Profile</h1>
      <form onSubmit={handleSaveProfile}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}
