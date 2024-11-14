import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://orkytzodzxjeviocffpv.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ya3l0em9kenhqZXZpb2NmZnB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1NTM2NDEsImV4cCI6MjA0NzEyOTY0MX0.UjfoihNn7nBcbAbfhPBsyreBgb3ouaEtogYs9CodZZw",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ya3l0em9kenhqZXZpb2NmZnB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1NTM2NDEsImV4cCI6MjA0NzEyOTY0MX0.UjfoihNn7nBcbAbfhPBsyreBgb3ouaEtogYs9CodZZw"
    }
})