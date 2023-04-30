export const timeZone = () => {


    const arrDate = []

    for(let i=0;i<24; i++) {

        if( i<12) {
        arrDate.push(`${i}:00 am`);
       
        } else {
            arrDate.push(`${i}:00 pm`);
          
        }
    };

    const timeZones = [
  "(GMT-11:00) Midway Island",
  "(GMT-10:00) Hawaii",
  "(GMT-09:00) Alaska",
  "(GMT-08:00) Pacific Time (US & Canada)",
  "(GMT-07:00) Mountain Time (US & Canada)",
  "(GMT-06:00) Central Time (US & Canada)",
  "(GMT-05:00) Eastern Time (US & Canada)",
  "(GMT-04:00) Atlantic Time (Canada)",
  "(GMT-03:00) Buenos Aires",
  "(GMT-02:00) Mid-Atlantic",
  "(GMT-01:00) Azores",
  "(GMT+00:00) London",
  "(GMT+01:00) Paris",
  "(GMT+03:00) Moscow",
  "(GMT-05:00) Bogota",
  "(GMT+04:00) Dubai",
  "(GMT+05:00) Karachi",
  "(GMT+06:00) Dhaka",
  "(GMT+07:00) Bangkok",
  "(GMT+08:00) Hong Kong",
  "(GMT+09:00) Tokyo",
  "(GMT+10:00) Sydney",
  "(GMT+12:00) Auckland",
  "(GMT+13:00) Nuku'alofa"
    ];

    return {arrDate,timeZones}
}