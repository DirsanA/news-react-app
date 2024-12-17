import defaultImage from "../assets/image.png";

function NewsItem({ title, description, src, url }) {
  const imageSrc = src ? src : defaultImage; // Use default image if src is not available

  // Set a default description if none is provided
  const defaultDescription =
    "This is a custom description which we cannot fetch from the API.";
  const displayDescription =
    description && description.length > 0
      ? description.length > 90
        ? description.slice(0, 90) + "..."
        : description
      : defaultDescription;

  return (
    <div
      className="card bg-dark text-light mb-3 my-3 mx-3 d-inline-block"
      style={{ maxWidth: "300px" }} // Card width
    >
      <img
        src={imageSrc}
        style={{ width: "100%", height: "200px", objectFit: "cover" }} // Maintain aspect ratio
        className="card-img-top"
        alt={title} // Use title for better accessibility
      />
      <div className="card-body">
        <h5 className="card-title">
          {title.length > 50 ? title.slice(0, 50) + "..." : title}
        </h5>
        <p className="card-text">
          {displayDescription} {/* Display the description */}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
