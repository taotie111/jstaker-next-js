const commonUrl = "http://localhost:3000/api/";
// 解析 json
export const parseJSON = (response: Response) => {
    return response.json();
};

// 检查请求状态
export const checkStatus = (response: Response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        var error = new Error(response.statusText);
        throw error;
    }
};

// 主题 request 请求 
export function request(url: string, options?: any) {
    const { method, data, headers } = options;
    if (method === "POST") {
        return fetch(commonUrl + url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            body: JSON.stringify(data),
        })
            .then(checkStatus)
            .then(parseJSON);
    } else {
        return fetch(commonUrl + url, {
            method:"GET"})
    }
}