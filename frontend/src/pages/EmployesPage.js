import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Paper, IconButton, Drawer, TextField, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/employes';

const initForm = {
  nom: '', prenom: '', code: '', email: '', adresse: '', date_naissance: '', lieu_naissance: '', nom_du_dependant: '', groupe_sanguin: '', telephone: '', Etat_matrimonial: '', NIF: '', NINU: '', type: ''
};

export default function EmployesPage() {
  const [employes, setEmployes] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(initForm);

  const fetchEmployes = async () => {
    const res = await axios.get(API_URL);
    setEmployes(res.data);
  };
  useEffect(() => { fetchEmployes(); }, []);

  const handleEdit = (row) => {
    setForm(row);
    setEditId(row.id_employe);
    setOpenDrawer(true);
  };
  const handleNew = () => {
    setForm(initForm);
    setEditId(null);
    setOpenDrawer(true);
  };
  const handleClose = () => setOpenDrawer(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (editId) {
      await axios.put(`${API_URL}/${editId}`, form);
    } else {
      await axios.post(API_URL, form);
    }
    fetchEmployes();
    setOpenDrawer(false);
  };

  const handleDelete = async id => {
    if (window.confirm('Supprimer cet employé ?')) {
      await axios.delete(`${API_URL}/${id}`);
      fetchEmployes();
    }
  };

  return (
    <Box p={3}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h2">Employés</Typography>
        <Button onClick={handleNew} variant="contained" size="small" startIcon={<AddIcon />}>Nouveau</Button>
      </Box>

      <Paper sx={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th><th>Nom</th><th>Prénom</th><th>Email</th><th>Téléphone</th><th>Code</th><th>Type</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employes.map((e) => (
              <tr key={e.id_employe}>
                <td>{e.id_employe}</td>
                <td>{e.nom}</td>
                <td>{e.prenom}</td>
                <td>{e.email}</td>
                <td>{e.telephone}</td>
                <td>{e.code}</td>
                <td>{e.type}</td>
                <td>
                  <IconButton onClick={() => handleEdit(e)} color="primary" size="small"><EditIcon /></IconButton>
                  <IconButton onClick={() => handleDelete(e.id_employe)} color="secondary" size="small"><DeleteIcon /></IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Paper>

      <Drawer anchor="right" open={openDrawer} onClose={handleClose} PaperProps={{ sx: { p: 3, width: 340 } }}>
        <Typography variant="h5" mb={2}>{editId ? 'Modifier' : 'Nouveau'} Employé</Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField label="Nom" name="nom" value={form.nom} onChange={handleChange} required fullWidth />
            <TextField label="Prénom" name="prenom" value={form.prenom} onChange={handleChange} required fullWidth />
            <TextField label="Code" name="code" value={form.code} onChange={handleChange} fullWidth />
            <TextField label="Email" name="email" value={form.email} onChange={handleChange} type="email" fullWidth />
            <TextField label="Adresse" name="adresse" value={form.adresse} onChange={handleChange} fullWidth />
            <TextField label="Date de naissance" name="date_naissance" value={form.date_naissance} onChange={handleChange} type="date" InputLabelProps={{ shrink: true }} fullWidth />
            <TextField label="Lieu de naissance" name="lieu_naissance" value={form.lieu_naissance} onChange={handleChange} fullWidth />
            <TextField label="Nom du dépendant" name="nom_du_dependant" value={form.nom_du_dependant} onChange={handleChange} fullWidth />
            <TextField label="Groupe sanguin" name="groupe_sanguin" value={form.groupe_sanguin} onChange={handleChange} fullWidth />
            <TextField label="Téléphone" name="telephone" value={form.telephone} onChange={handleChange} fullWidth />
            <TextField label="État matrimonial" name="Etat_matrimonial" value={form.Etat_matrimonial} onChange={handleChange} fullWidth />
            <TextField label="NIF" name="NIF" value={form.NIF} onChange={handleChange} fullWidth />
            <TextField label="NINU" name="NINU" value={form.NINU} onChange={handleChange} fullWidth />
            <TextField label="Type" name="type" value={form.type} onChange={handleChange} fullWidth />
          </Stack>
          <Button type="submit" color="primary" variant="contained" sx={{ mt: 3, fontWeight: 600 }} fullWidth>
            {editId ? 'Mettre à jour' : 'Créer'}
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
