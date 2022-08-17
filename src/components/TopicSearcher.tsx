import React from "react";
import TextField from "@mui/material/TextField";

interface Props {
  setTopic: (value: string) => void;
}

export const TopicSearcher = ({ setTopic }: Props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  };
  return (
    <TextField
      margin="dense"
      id="topic-explorer-input"
      label="Tell me a topic..."
      variant="outlined"
      fullWidth
      size="small"
      onChangeCapture={handleInputChange}
    />
  );
};
