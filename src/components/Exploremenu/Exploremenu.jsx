import { menu_list } from "../../assets/assets";

const Exploremenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu px-6 py-10" id="explore-menu">
      <h1 className="text-3xl font-bold text-center mb-4">Explore Our Menu</h1>
      <p className="explore-menu-text text-center text-lg mb-6">
        Choose from a diverse menu featuring
      </p>
      <div className="explore-menu-list grid grid-cols-4 gap-6">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "all" : item.menu_name
                )
              }
              className={`explore-menu-list-item flex flex-col items-center p-4 border rounded-lg shadow hover:shadow-lg ${
                category === item.menu_name ? "bg-blue-100" : ""
              }`}
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="w-24 h-24 object-cover rounded-md mb-4"
              />
              <p className="text-lg font-medium text-center">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exploremenu;
