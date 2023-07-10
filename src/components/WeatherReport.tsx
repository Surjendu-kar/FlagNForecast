import { useState } from "react";
import { Button, Box } from "@mui/material";

interface Props {
  capital: string;
}

export function WeatherReport(props: Props) {
  //   console.log(props.capital);
  const CONSTRANTS = {
    CHECK: "Check Capital Weather",
    NOTFOUND: "temp can't found",
  };

  const [weather, setweather] = useState<string | null>(null);
  const [apicall, setApiCall] = useState<string>(CONSTRANTS.CHECK);

  interface WeatherType {
    main: { temp: string };
  }

  const fetchApi = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.capital}&units=metric&appid=f04c7395ed903d5f8c068e3cbeb068f5`;
    try {
      const res = await fetch(url);
      const data: WeatherType = await res.json();

      setweather(data.main.temp);
    } catch (error) {
      console.log(error);
      setApiCall(CONSTRANTS.NOTFOUND);
    }
  };
  return (
    <Box>
      {weather ? (
        <h3>Weather : {weather}</h3>
      ) : (
        <Button variant="outlined" onClick={fetchApi}>
          {apicall}
        </Button>
      )}
    </Box>
  );
}
