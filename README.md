# Next 13

## Серверные и клиентские компоненты

![React components](example-1.webp)

### Правила вложения

- нельзя импортировать серверный компонент внутри клиентского
- можно пробрасывать серверные компоненты в клиентские как `children`

![Пример страницы](example-2.avif)

Используйте клиентские компоненты когда:

- необходимо использовать хуки
- когда необходимы обработчики событий на пользовательские действия
- при использовании браузерного API
- когда используется классовый компонент

Используйте серверные компоненты, когда:

- вы получаете данные через серверное API
- когда нужен прямой доступ к ресурсам бэкенда
- когда используется sensetive информация (ключи API, токены и пр.)
- когда используются тяжелые зависимости
=======
## Handlers API

Для создания API-роутов внутри `/app` директории, как правило, создается вложенная директория `/api` со своими папками, внутри которых создается файл с названием `route.ts`.

Если файл находит по пути `/app/api/posts/`, то адрес запроса будет `/api/posts`.

Сам `route.ts` должен экспортировать объект с функциями по именам HTTP методов: `GET`, `POST`, `DELETE` и так далее.

Например:

```typescript
export async function GET(req: Request) {
  return NextResponse.json(currentPosts);
}
```

### Правила использования API хэндлеров и страниц

| Page               | Route            | Result      |
| ------------------ | ---------------- | ----------- |
| app/page.js        | app/route.js     | 💥 Conflict |
| app/page.js        | app/api/route.js | 👌 Valid    |
| app/[user]/page.js | app/api/route.js | 👌 Valid    |

### Извлечение данных

```typescript
// получение квери параметров

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("q");

  // some logic

  return NextResponse.json(currentPosts);
}
```

```typescript
// получение тела запроса

export async function POST(req: Request) {
  const body = await req.json();

  console.log(body);

  return NextResponse.json({ message: "done" });
}
```

```typescript
// получение параметров URL

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params?.id;

  // some logic for delete post by id

  return NextResponse.json({ id });
}
```

### Встроенные функции

```typescript
import { headers, cookies } from "next/headers";

export async function GET(req: Request) {
  const headersList = headers();
  const cookiesList = cookies();

  const type = headersList.get("Content-Type");
  const Cookie_1 = cookiesList.get("Cookie_1")?.value;

  return NextResponse.json({});
}
```

```typescript
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  redirect("https://nextjs.org/");
}
```
