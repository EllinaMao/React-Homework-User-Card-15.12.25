/**
 * UserCard - функциональный компонент, который отображает одного пользователя. Props: name (строка) age (число) avatar (картинка). Используйте inline-стили для оформления карточки
 */

function UserCard({ name, age, avatar }) {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    width: "200px",
    margin: "8px",
    display: "grid",
    gridTemplateRows: "repeat(2, 1fr)",
    justifyItems: "center",
    textAlign: "center",
    gap: "16px",

    boxShadow: "2px 2px 12px rgba(99, 182, 250, 0.56)",
  };

  const avatarStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "8px",
  };


  return (
    <div style={cardStyle}>
      <img src={avatar} alt={`${name}'s avatar`} style={avatarStyle} />
      <div>
        <h3>{name}</h3>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}

export default UserCard;
