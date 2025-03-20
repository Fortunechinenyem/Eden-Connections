import { useState } from "react";
import { auth, db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/router";

export default function ProfileSetup() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user) {
      setError("You must be logged in to save your profile.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      let profilePictureUrl = "";
      if (profilePicture) {
        const fileRef = ref(storage, `profile-pictures/${user.uid}`);
        await uploadBytes(fileRef, profilePicture);
        profilePictureUrl = await getDownloadURL(fileRef);
      }

      await setDoc(doc(db, "users", user.uid), {
        name,
        age: parseInt(age),
        bio,
        email: user.email,
        profilePicture: profilePictureUrl,
      });

      router.push("/dashboard"); // Redirect to dashboard
    } catch (error) {
      console.error("Error saving profile:", error.message);
      setError("Failed to save profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">
          Set Up Your Profile
        </h1>
        <form onSubmit={handleSaveProfile} className="space-y-6">
          <div className="flex justify-center">
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setProfilePicture(e.target.files[0])}
                className="hidden"
              />
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {profilePicture ? (
                  <img
                    src={URL.createObjectURL(profilePicture)}
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500">Upload Photo</span>
                )}
              </div>
            </label>
          </div>

          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              required
              min="18"
            />
          </div>

          {/* Bio Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              placeholder="Tell us about yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              rows="4"
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              {loading ? "Saving..." : "Save Profile"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
