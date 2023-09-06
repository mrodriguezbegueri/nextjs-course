import { EntryList, NewEntry } from "@/components/ui";
import { Card, CardHeader, Grid } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - OpenJira",
};

export default function HomePage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader title="Pendientes" />
            {/* Agregar una nueva tarea */}
            <NewEntry />
            {/* Listado de las entradas */}
            <EntryList status='pending' />
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
      <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader title="En progreso" />
          <EntryList status='in-progress' />
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
      <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader title="Completadas" />
          <EntryList status='finished' />
        </Card>
      </Grid>

    </Grid>
  )
}
