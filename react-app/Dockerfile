FROM node:12.16.3-alpine as build

WORKDIR /app

COPY . ./

# ---
FROM fholzer/nginx-brotli:v1.12.2

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
#COPY --from=build /app/react_native_files /usr/share/nginx/html/vitaminds
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]