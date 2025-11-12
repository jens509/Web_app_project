import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Button, IconButton, Drawer, TextField, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/structures';

const initForm = { nom: '', description: '' };

export default function StructuresPage() {
  const [rows, setRows] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(initForm);

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setRows(data);
  };
  useEffect(() => { fetchData(); }, []);

  const handleEdit = (row) => { setForm(row); setEditId(row.id_structure); setOpenDrawer(true); };
  const handleNew = () => { setForm(initForm); setEditId(null); setOpenDrawer(true); };
  const handleClose = () => setOpenDrawer(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    if (editId) {
      await axios.put(`${API_URL}/${editId}`, form);
    } else {
      await axios.post(API_URL, form);
    }
    fetchData(); setOpenDrawer(false);
  };
  const handleDelete = async id => { if (window.confirm('Supprimer ?')) { await axios.delete(`${API_URL}/${id}`); fetchData(); } };

  return (
    <Box p={3}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h2">Structures</Typography>
        <Button onClick={handleNew} variant="contained" size="small" startIcon={<AddIcon />}>Nouveau</Button>
      </Box>
      <Paper sx={{ overflowX: 'auto' }}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr><th>ID</th><th>Nom</th><th>Description</th><th>Actions</th></tr>
          </thead>
          <tbody>
          {rows.map((e) => (
            <tr key={e.id_structure}>
              <td>{e.id_structure}</td>
              <td>{e.nom}</td>
              <td>{e.description}</td>
              <td>
                <IconButton onClick={() => handleEdit(e)} color="primary" size="small"><EditIcon /></IconButton>
                <IconButton onClick={() => handleDelete(e.id_structure)} color="secondary" size="small"><DeleteIcon /></IconButton>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </Paper>
      <Drawer anchor="right" open={openDrawer} onClose={handleClose} PaperProps={{ sx: { p: 3, width: 340 } }}>
        <Typography variant="h5" mb={2}>{editId ? 'Modifier' : 'Nouvelle'} Structure</Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField label="Nom" name="nom" value={form.nom} onChange={handleChange} required fullWidth />
            <TextField label="Description" name="description" value={form.description} onChange={handleChange} fullWidth />
          </Stack>
          <Button type="submit" color="primary" variant="contained" sx={{ mt: 3, fontWeight: 600 }} fullWidth>
            {editId ? 'Mettre à jour' : 'Créer'}
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
