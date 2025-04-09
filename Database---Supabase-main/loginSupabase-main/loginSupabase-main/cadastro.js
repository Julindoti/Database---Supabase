


    

       const troca = document.getElementById("troca");
       const containerlogin= document.getElementById("form-login")
       const containerCad=document.getElementById("form-cadastro")
       const titulo= document.getElementById("texto");
       let HTMLguardado="";
            

      function puxar(){


       
        containerCad.style.display="flex";
        containerlogin.style.display="none";
        titulo.innerText="Cadastro com Supabase";
       
        
        
       }
      function puxar2(){


        containerCad.style.display="none";
        containerlogin.style.display="flex";
        titulo.innerText="Login com Supabase";
      }


      import { supabase } from "./supabase.js";

        async function login() {
            console.log("Tentando fazer login...");
            const email = document.getElementById("email-login").value.trim();
            const senha = document.getElementById("senha-login").value.trim();
            const usuario = document.getElementById("usuario").value.trim();
            
            if (!email || !senha ) {
                document.getElementById("mensagem").innerText = "Preencha todos os campos!";
                return;
            }

            const { data, error } = await supabase.auth.signInWithPassword({ email, password: senha, text:usuario  });

            if (error) {
                document.getElementById("mensagem").innerText = "Erro: " + error.message;
            } else {
                document.getElementById("mensagem").innerText = "Login realizado com sucesso!";
                localStorage.setItem("usuarioEmail", email);
                localStorage.setItem("nomeUsuario", usuario);
                setTimeout(() => {
                    window.location.href = "bem-vindo.html";
                }, 2000);
            }
        }

        async function cadastrar() {
            console.log("Tentando cadastrar...");
            const email = document.getElementById("email-cadastro").value.trim();
            const senha = document.getElementById("senha-cadastro").value.trim();

            if (!email || !senha) {
                document.getElementById("mensagem").innerText = "Preencha todos os campos!";
                return;
            }

            const { data, error } = await supabase.auth.signUp({ email, password: senha });

            if (error) {
                document.getElementById("mensagem").innerText = "Erro: " + error.message;
            } else {
                document.getElementById("mensagem").innerText = "Cadastro concluido! você será redirecionado ao login ";
                setTimeout(()=>{

                containerCad.style.display="none";
                containerlogin.style.display="flex";
                document.getElementById("mensagem").innerText=""
                }, 4500)
            }
        }