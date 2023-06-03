export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      friend_requests: {
        Row: {
          created_at: string | null;
          from_user: string;
          id: string;
          status: number;
          to_user: string;
        };
        Insert: {
          created_at?: string | null;
          from_user?: string;
          id?: string;
          status?: number;
          to_user: string;
        };
        Update: {
          created_at?: string | null;
          from_user?: string;
          id?: string;
          status?: number;
          to_user?: string;
        };
      };
      relationships: {
        Row: {
          created_at: string;
          id: number;
          status: number;
          user_one: string;
          user_two: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          status: number;
          user_one: string;
          user_two: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          status?: number;
          user_one?: string;
          user_two?: string;
        };
      };
      users: {
        Row: {
          avatar_url: string | null;
          email: string;
          id: string;
          name: string;
        };
        Insert: {
          avatar_url?: string | null;
          email: string;
          id: string;
          name: string;
        };
        Update: {
          avatar_url?: string | null;
          email?: string;
          id?: string;
          name?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
