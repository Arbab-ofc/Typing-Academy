# Typing Academy

Typing Academy is a premium, lesson-based typewriting frontend application built with React + Vite + Tailwind CSS.

## Highlights

- 50 structured lessons from fundamentals to mastery
- Progressive unlocking based on lesson success
- Real-time typing metrics: WPM, accuracy, mistakes, progress
- Result flow with pass/fail feedback and next-step actions
- Dashboard analytics with milestones, history, and lesson stats
- Settings persistence (theme, text size, panel size, sound toggle)
- LocalStorage-powered progress, history, and achievements
- Responsive dark-first UI optimized for mobile to desktop

## Stack

- React
- Vite
- Tailwind CSS
- React Router
- React Icons
- React Toastify
- react-loader-spinner

## Routes

- `/`
- `/lessons`
- `/lessons/:lessonId`
- `/results/:lessonId`
- `/dashboard`
- `/settings`
- `/about`

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Data Persistence

Progress and preferences are stored in localStorage with dedicated keys:

- `typing_academy_progress_v1`
- `typing_academy_settings_v1`
- `typing_academy_recent_result_v1`

## Project Structure

```text
src/
  components/
  data/
  hooks/
  pages/
  routes/
  styles/
  utils/
```
