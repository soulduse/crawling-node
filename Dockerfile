# Docker Hub에 있는 node 최신 LTS버전 carbon 사용
FROM node:carbon

# 앱 디렉터리 생성
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# 앱 의존성 설치
COPY package*.json ./
RUN npm install

# 앱 소스 추가
COPY . .

# docker 데몬에 매핑
EXPOSE 8080

# npm start
CMD ["npm", "start"]