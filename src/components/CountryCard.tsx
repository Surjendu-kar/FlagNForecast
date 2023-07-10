import Center from "./Center";
import { CardMedia, CardContent, Typography, Card } from "@mui/material";
import { WeatherReport } from "./WeatherReport";

interface Props {
  country: {
    flags: { png: string };
    name: { common: string };
    capital: string;
  };
}

const CountryCard = (props: Props) => {
  const { country } = props;

  return (
    <Center>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          data-testid="img-view"
          sx={{ height: 140 }}
          image={country.flags.png}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h4 style={{ margin: 0 }}>{country.name.common}</h4>
            Capital : {country.capital}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <WeatherReport capital={country.capital} />
          </Typography>
        </CardContent>
      </Card>
    </Center>
  );
};

export default CountryCard;
