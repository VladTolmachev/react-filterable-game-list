# Стартер для проекта "Список игр с фильтрами"

Приложение создано помощью [Create React App](https://github.com/facebook/create-react-app).

## Как запустить проект

В корне проекта запустить:

### `npm start`

## Dockerfile в проекте

В приложении есть dockerfile в котором приложение собирается и открывается с помощью сервера nginx.

Соберите `image` командой: `docker build -t <название контейнера которое вы хотите> .`

### `docker build -t my-react-gamelist .`

После этой команды у вас будет образ(imgage) вашего приложения. \
Теперь этот собранный образ приложения можно запустить командой:  `docker run -it <название контейнера коотрый хотите запустить>`

### `docker run -it my-react-gamelist`

Запустить приложение в режиме разработки.\
Откройте [http://localhost](http://localhost) чтобы увидеть приложение в браузере.
