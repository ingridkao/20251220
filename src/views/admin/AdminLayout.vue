<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <RouterLink to="/admin">Dashboard</RouterLink>
      <RouterLink to="/admin/users">Users</RouterLink>
      <RouterLink to="/admin/settings">Settings</RouterLink>
    </aside>
    <main class="content">
      <RouterView />
      <!-- ✅ 子路由會渲染在這裡 -->
    </main>
  </div>
</template>

<style lang="scss" scoped>
.admin-layout {
  min-height: 100vh;
  display: flex;
  background: #f6f7fb;
}

/* Sidebar */
.sidebar {
  width: 220px;
  padding: 16px;
  background: #111827; /* 深色 */
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  a {
    display: block;
    padding: 10px 12px;
    border-radius: 10px;
    color: #e5e7eb;
    text-decoration: none;
    transition:
      background 0.15s ease,
      color 0.15s ease;
    &:hover {
      background: rgba(255, 255, 255, 0.08);
      color: #fff;
    }
    &.router-link-exact-active {
      background: rgba(59, 130, 246, 0.25); /* 藍色淡底 */
      color: #fff;
      font-weight: 600;
    }
  }
}

/* Content */
.content {
  flex: 1;
  padding: 24px;
}
</style>
