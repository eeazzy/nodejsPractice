const myURL = new URL("https://user:pass@sub.ex.com:8080/p/a?query=string#hash");

console.log(myURL);
// URL {
//     href: 'https://user:pass@sub.ex.com:8080/p/a?query=string#hash',
//     origin: 'https://sub.ex.com:8080',
//     protocol: 'https:',
//     username: 'user',
//     password: 'pass',
//     host: 'sub.ex.com:8080',
//     hostname: 'sub.ex.com',
//     port: '8080',
//     pathname: '/p/a',
//     search: '?query=string',
//     searchParams: URLSearchParams { 'query' => 'string' },
//     hash: '#hash'
//   } 이런 정보를 뽑아낼 수 있음

console.log(myURL.username); // 이렇게 따로 뽑아낼 수 있음 
const user = myURL.searchParams.get("user"); // 혹은 서치로 따로 뽑아낼 수 있음
const queryString = myURL.searchParams.get("query");
console.log(queryString);

console.log(myURL.searchParams.keys());
console.log(myURL.searchParams.values());

myURL.searchParams.append("user2","der"); // 추가
myURL.searchParams.set("user","ssr"); // 변경
myURL.searchParams.delete("user"); // 삭제

myURL.searchParams.getAll("user"); // 키가 user인 값 전부 가져오기

console.log(myURL.searchParams.toString()); // 문자열로 반환