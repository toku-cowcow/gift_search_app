/**
 * API通信クライアントの設定
 * 
 * このファイルの役割：
 * - バックエンド（FastAPI）との通信設定を一元管理
 * - HTTP リクエストの共通設定（ベースURL、ヘッダー、タイムアウトなど）
 * - エラーハンドリングの統一
 * 
 * 初心者向け解説：
 * このファイルは「電話の基本設定」のようなもの。
 * - どこに電話をかけるか（baseURL）
 * - どのくらい待つか（timeout）  
 * - エラーが起きた時どうするか（interceptors）
 * を決めています。
 */

import axios, { AxiosInstance, AxiosError } from 'axios'

/**
 * バックエンドサーバーのベースURL取得
 * 環境変数から読み込み、設定されていない場合はローカル開発環境を使用
 */
const getBaseURL = (): string => {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL
  
  if (!baseURL) {
    console.warn('NEXT_PUBLIC_BACKEND_URL が設定されていません。デフォルトのローカルサーバーを使用します。')
    return 'http://localhost:8000'
  }
  
  return baseURL
}

/**
 * APIクライアントインスタンス
 * 
 * axiosライブラリを使用してHTTP通信を行います。
 * axiosは「電話をかける道具」のようなもので、
 * サーバーにデータを取りに行ったり、送ったりできます。
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000, // 10秒でタイムアウト（それ以上待たない）
  headers: {
    'Content-Type': 'application/json', // JSONデータを送受信することを宣言
  },
})

/**
 * レスポンス（サーバーからの返事）の処理
 * 
 * 成功した場合：そのままデータを返す
 * エラーの場合：エラー内容をわかりやすく整理して投げる
 */
apiClient.interceptors.response.use(
  // 成功時の処理（200番台のステータスコード）
  (response) => {
    return response
  },
  
  // エラー時の処理（400番台、500番台のステータスコード）
  (error: AxiosError) => {
    // エラー内容をコンソールに表示（開発時のデバッグ用）
    console.error('API通信エラー:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      url: error.config?.url,
    })
    
    // エラーをそのまま投げて、呼び出し元で処理できるようにする
    return Promise.reject(error)
  }
)

/**
 * API通信のヘルパー関数
 * 
 * よく使うHTTPメソッド（GET, POST, PUT, DELETE）を
 * 簡単に呼び出せるように関数として用意
 */
export const api = {
  /**
   * GET リクエスト（データを取得）
   * @param url - 取得したいデータのURL
   * @param params - URLパラメータ（?key=value の部分）
   */
  get: <T = any>(url: string, params?: Record<string, any>) => 
    apiClient.get<T>(url, { params }),

  /**
   * POST リクエスト（データを送信・作成）
   * @param url - データを送信するURL
   * @param data - 送信するデータ
   */
  post: <T = any>(url: string, data?: any) => 
    apiClient.post<T>(url, data),

  /**
   * PUT リクエスト（データを更新）
   * @param url - 更新するデータのURL
   * @param data - 更新するデータ
   */
  put: <T = any>(url: string, data?: any) => 
    apiClient.put<T>(url, data),

  /**
   * DELETE リクエスト（データを削除）
   * @param url - 削除するデータのURL
   */
  delete: <T = any>(url: string) => 
    apiClient.delete<T>(url),
}

// デフォルトエクスポート（他のファイルでimportしやすくする）
export default apiClient