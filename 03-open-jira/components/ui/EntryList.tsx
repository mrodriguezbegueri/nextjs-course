"use client";

import { List, Paper } from "@mui/material";
import { EntryStatus } from "@/interfaces";
import { DragEvent, FC, useContext, useMemo } from "react";
import { EntryCard } from ".";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";

import styles from './EntryList.module.css'

interface Props {
  status: EntryStatus;
}

const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext( UIContext )

  const entriesByStatues = useMemo(() => entries.filter((entry) => entry.status === status), [entries, status]);

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text')

    const entry = entries.find(entry => entry._id === id)
    if (entry !== undefined) {
      entry.status = status
      updateEntry(entry)
    }
    endDragging()
    console.log('ID: ', id);
  };

  return (
    // TODO: aqui haremos drop
    <div onDrop={onDropEntry} onDragOver={allowDrop} className={ isDragging ? styles.dragging : '' }>
      <Paper
        sx={{ height: "calc(100vh - 180px)", overflow: "auto", backgroundColor: "transparent", padding: "3px 5px" }}
      >
        {/* Cambiara dependiendo si estoy haciendo drag o no */}
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
          {entriesByStatues.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default EntryList
