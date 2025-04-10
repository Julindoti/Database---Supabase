import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
    "https://nzvzwpffucfzyliezfef.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56dnp3cGZmdWNmenlsaWV6ZmVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5OTA0MjksImV4cCI6MjA1ODU2NjQyOX0.O5SJfOmzOKxzITvMcn_3lrGvuD1m_VIHnmQZe5d2vmo");

export {supabase}