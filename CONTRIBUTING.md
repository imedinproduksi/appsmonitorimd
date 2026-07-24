# Contributing Guide

Terima kasih sudah tertarik untuk berkontribusi pada Apps Monitoring MD!

## Code of Conduct

Proyek ini mengikuti Contributor Covenant Code of Conduct.

## How to Contribute

### 1. Fork Repository

Klik tombol Fork di GitHub untuk membuat copy repository ke akun Anda.

### 2. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/appsmonitorimd.git
cd appsmonitorimd
```

### 3. Create Feature Branch

```bash
git checkout -b feature/your-feature-name
```

Naming convention:
- `feature/` - untuk fitur baru
- `bugfix/` - untuk bug fixes
- `docs/` - untuk dokumentasi
- `refactor/` - untuk refactoring code

### 4. Make Changes

- Code harus mengikuti style guide (lihat di bawah)
- Tulis tests untuk fitur baru
- Update dokumentasi jika perlu

### 5. Testing

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific file
npm test -- path/to/test
```

### 6. Linting & Formatting

```bash
# Check linting
npm run lint

# Format code
npm run format
```

### 7. Commit Changes

```bash
git add .
git commit -m "type: description"
```

Commit message format (Conventional Commits):

```
<type>: <description>

<optional body>
<optional footer>
```

Types:
- `feat:` - Feature baru
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style (formatting, missing semicolons, etc)
- `refactor:` - Refactoring code
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance

Contoh:

```
feat: add user authentication endpoint

Implement JWT-based authentication with the following:
- Login endpoint
- Token refresh mechanism
- User validation

Closes #123
```

### 8. Push to GitHub

```bash
git push origin feature/your-feature-name
```

### 9. Create Pull Request

- Buka GitHub dan click "New Pull Request"
- Pilih branch Anda sebagai source
- Isi PR description dengan detail
- Submit PR

## PR Description Template

```markdown
## Description

Describe perubahan Anda di sini.

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issues

Closes #(issue number)

## How Has This Been Tested?

Describe testing di sini.

## Checklist

- [ ] Code follows style guidelines
- [ ] Tests written and passing
- [ ] Documentation updated
- [ ] No new warnings generated
```

## Style Guide

### JavaScript

- Use 2 spaces for indentation
- Use single quotes untuk strings
- Use semicolons
- Use async/await daripada callbacks
- Add JSDoc comments untuk functions

```javascript
/**
 * Authenticate user dengan credentials
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<Object>} - User object dengan token
 * @throws {Error} - Jika authentication gagal
 */
async function authenticateUser(email, password) {
  // Implementation
}
```

### Database Changes

- Create migration files untuk schema changes
- Format: `YYYYMMDD_HHmmss_description.sql`
- Include rollback migration

### Documentation

- Use Markdown format
- Include code examples
- Keep it up-to-date dengan code changes

## Review Process

1. Maintainer akan review PR Anda
2. Mungkin ada requests untuk changes
3. Setelah approval, PR akan di-merge

## Questions?

Buat issue atau diskusi jika ada pertanyaan!

---

Terima kasih sudah berkontribusi! 🙌
