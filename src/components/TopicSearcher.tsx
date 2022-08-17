import React, { useState } from "react";
import TextField from "@mui/material/TextField";

interface Props {
  setTopic: (value: string) => void;
}

export const TopicSearcher = ({ setTopic }: Props) => {
  const [topicToSearch, setTopicToSearch] = useState("");

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTopicToSearch(target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (topicToSearch.trim().length > 2) {
      setTopic(topicToSearch);
      setTopicToSearch("");
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form-topic">
      <TextField
        margin="dense"
        inputProps={{ "data-testid": "topic-explorer-input" }}
        label="Tell me a topic..."
        variant="outlined"
        fullWidth
        size="small"
        onChangeCapture={handleInputChange}
        value={topicToSearch}
      />
    </form>
  );
};
