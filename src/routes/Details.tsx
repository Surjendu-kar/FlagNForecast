import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import CountryCard from "../components/CountryCard";

interface CountryType {
  flags: { png: string };
  capital: string;
  name: { common: string };
}

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, []);

  if (!location.state) return null;

  const mainCountry: CountryType = location.state.country[0];
  const otherCountries: CountryType[] = location.state.country.slice(1);

  return (
    <div>
      <Box>
        <CountryCard country={mainCountry} />
      </Box>

      <Box m={5} display="flex" flexWrap="wrap" gap={2}>
        {otherCountries.map((each, indx) => (
          <CountryCard country={each} key={indx} />
        ))}
      </Box>
    </div>
  );
};

export default Details;
