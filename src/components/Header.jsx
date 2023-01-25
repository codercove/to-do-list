const Header = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <header>
      <h1>
        <span>{days[new Date().getDay() - 1]},</span>
        {new Date().getDate() + " "}
        {months[new Date().getMonth()].slice(0, 3)}
      </h1>
    </header>
  );
};

export default Header;
