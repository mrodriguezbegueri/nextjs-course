# Next.js OpenJira APP
para correr localment, se necesita la base de datos

```
docker-compose up -d
```

* MongoDB URL Local:

```
mongodb://localhost:27017
```
## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__

## LLenar la base de datos con información de prueba

```
http://localhost:3000/api/seed
```