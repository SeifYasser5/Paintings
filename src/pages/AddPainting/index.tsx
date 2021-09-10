import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Painting from "../../services/models/Painting";
import { useAddPainting } from "../../state/painting/hooks";
import { AddPaintingContainer, Error } from "./styles";

const AddPainting: React.FC = () => {
  const addPainting = useAddPainting();

  const [painting, setPainting] = useState<Painting>({
    name: "",
    description: "",
    image: "",
  });

  const [error, setError] = useState("");

  const handleChange = (value: any, name: string) =>
    setPainting({ ...painting, [name]: value });

  const submit = () => {
    const { name, description, image } = painting;
    if (name && description && image) addPainting(painting);
    else setError("Please fill required fields");
  };

  return (
    <AddPaintingContainer>
      {error && <Error>{error}</Error>}
      <Input
        name="name"
        onChange={handleChange}
        error={error !== "" && painting.name === ""}
      />
      <Input
        name="description"
        onChange={handleChange}
        error={error !== "" && painting.description === ""}
      />
      <Input
        name="image"
        onChange={handleChange}
        type="file"
        error={error !== "" && painting.image === ""}
        accept="image/*"
      />
      <Button text="Add Painting" onClick={submit} />
    </AddPaintingContainer>
  );
};

export default AddPainting;
