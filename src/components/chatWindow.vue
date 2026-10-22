<template>
  <main class="chat-window">
    <header class="chat-header">
      <h2>Miracle</h2>
      <span>Online</span>
    </header>

    <section class="messages">
      <div class="message received">Hi there! I'm interested in learning more.</div>

      <div class="message sent">Hello! Absolutely, we provide a range of services.</div>

      <div class="message received">Can you tell me more about what you offer?</div>

      <div class="message sent">Kindly go to our website to learn more.</div>
    </section>

    <footer class="message-input">
      <input type="text" placeholder="Type Your Message" />

      <button>Send</button>
    </footer>
  </main>
</template>

<style scoped>
.chat-window {
  flex: 1;

  display: flex;

  flex-direction: column;

  min-width: 0;
}

.chat-header {
  height: 70px;

  padding: 15px 25px;

  border-bottom: 1px solid #e5e5e5;

  display: flex;

  align-items: center;

  justify-content: space-between;
}

.chat-header h2 {
  margin: 0;

  font-size: 18px;
}

.chat-header span {
  font-size: 13px;

  color: #0ae985;
}

.messages {
  flex: 1;

  padding: 25px;

  overflow-y: auto;

  background-color: #fafafa;

  display: flex;

  flex-direction: column;

  gap: 15px;
}

.message {
  max-width: 60%;

  padding: 12px 16px;

  border-radius: 12px;

  font-size: 14px;
}

.received {
  align-self: flex-start;

  background-color: white;

  border: 1px solid #eee;
}

.sent {
  align-self: flex-end;

  background-color: #6c4df6;

  color: white;
}

.message-input {
  display: flex;

  gap: 10px;

  padding: 15px;

  border-top: 1px solid #e5e5e5;
}

.message-input input {
  flex: 1;

  padding: 12px;

  border: 1px solid #ddd;

  border-radius: 8px;

  outline: none;
}

.message-input button {
  padding: 0 20px;

  border: none;

  border-radius: 8px;

  background-color: #6c4df6;

  color: white;

  cursor: pointer;
}
</style>
