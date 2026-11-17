# Segunda via + — projeto multiplataforma

Um código só (`www/index.html`) vira: **app Android (APK)**, **programa Windows (.exe)**, **Mac (.dmg)** e **Linux (AppImage)**.
Os instaladores são gerados na nuvem pelo GitHub, sem instalar nada no seu computador.

## Gerar os instaladores
1. Crie uma conta grátis em **github.com** e um **repositório novo** (pode ser privado).
2. Envie todos os arquivos desta pasta para o repositório (**Add file > Upload files**, arrastando tudo, inclusive a pasta `.github`).
   Se a pasta `.github` não subir, use **Add file > Create new file**, digite `.github/workflows/build.yml` como nome e cole o conteúdo do arquivo.
3. Abra a aba **Actions**, clique em **Gerar instaladores** e em **Run workflow**.
4. Espere cerca de 10 a 20 minutos. Ao terminar, entre na execução e baixe os arquivos na seção **Artifacts**.

## Instalar
- **Android:** passe o `app-debug.apk` para o celular e abra. Se pedir, permita "instalar apps de fontes desconhecidas".
- **Windows:** execute o `.exe`. Se aparecer o aviso azul do SmartScreen, clique em **Mais informações > Executar assim mesmo**.
- **Mac:** abra o `.dmg`, arraste para Aplicativos e, na primeira vez, clique com o botão direito > **Abrir**.
- **Linux:** `chmod +x arquivo.AppImage` e execute.
- **iPhone:** abra o link do site no Safari > Compartilhar > **Adicionar à Tela de Início**. (App Store exige Mac e conta Apple paga.)

## Configurar
- Em `www/config.js`, coloque o link do seu site (Netlify). Ele é usado no e-mail de "Esqueci minha senha" quando o app está instalado.
- Para atualizar o app: troque o `www/index.html` no repositório e rode o **Run workflow** de novo.
- O mesmo conteúdo da pasta `www` também pode ser publicado no Netlify (arraste a pasta `www`).

## Limites desta versão
- O APK é de teste (assinado com chave de depuração): instala direto, mas não serve para a Google Play. Para a loja é preciso gerar uma versão assinada.
- Mac e Windows aparecem com aviso de "desenvolvedor desconhecido" porque os programas não são assinados.
- O app precisa de internet (login e dados ficam no Supabase).
