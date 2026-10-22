<template>
  <section class="chat-list">
    <h2>Chats</h2>

    <input type="text" placeholder="Search for Contacts or Messages" />

    <h3>Recent Chats</h3>

    <div class="recent-chats">
      <div>Miracle</div>
      <div>Nicholas</div>
      <div>Titus</div>
      <div>Geoffrey</div>
    </div>

    <h3>All Chats</h3>

    <div class="chat-item">
      <strong>Aaryian Jose</strong>
      <span>02:12 PM</span>
    </div>

    <div class="chat-item">
      <strong>Sarika Jain</strong>
      <span>08:12 AM</span>
    </div>

    <div class="chat-item">
      <strong>Clyde Smith</strong>
      <span>03:15 AM</span>
    </div>

    <div class="chat-item">
      <strong>Rosemary Ben</strong>
      <span>04:15 AM</span>
    </div>
  </section>
</template>

<style scoped>
.chat-list {
  width: 300px;

  padding: 20px;

  border-right: 1px solid #e5e5e5;

  overflow-y: auto;
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
}

.chat-list h2 {
  margin-top: 0;
}

.chat-list input {
  width: 100%;

  padding: 12px;

  border: 1px solid #ddd;

  border-radius: 8px;

  outline: none;
}

.chat-list h3 {
  margin-top: 25px;

  font-size: 13px;

  color: #777;
}

.chat-item {
  display: flex;

  justify-content: space-between;

  padding: 15px 5px;

  border-bottom: 1px solid #f0f0f0;

  cursor: pointer;
}

.chat-item:hover {
  background-color: #f7f7f7bb;
}

.chat-item span {
  font-size: 11px;

  color: #999;
}
</style>
