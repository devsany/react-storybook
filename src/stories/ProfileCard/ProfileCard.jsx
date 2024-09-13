import React, { useState } from "react";

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    // if (onUpdate) onUpdate({ name, email });
    setIsEditing(false);
  };

  return (
    <div>
      {/* <img src={user.profilePicture} alt="Profile" /> */}
      <h2>
        {isEditing ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          name
        )}
      </h2>
      <p>
        {isEditing ? (
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          email
        )}
      </p>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
      {isEditing && <button onClick={handleSave}>Save </button>}
    </div>
  );
};

export default ProfileCard;
