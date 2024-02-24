interface Data {
  name: string;
  value: number;
  fill: string;
}

export const formatToursData = (data: Data[]) => {
  const backgroundValue = data.reduce((sum, current) => sum + current.value, 0);
  const backgroundData: Data = {
    name: "Background",
    value: backgroundValue,
    fill: "#EDEFF1",
  };
  const soldData: Data = {
    name: data[0].name,
    value: data[0].value,
    fill: data[0].fill,
  };
  return [backgroundData, soldData];
};
