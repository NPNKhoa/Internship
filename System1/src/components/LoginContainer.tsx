import { Lock, User } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import type React from 'react';

type LoginContainerProps = {
  handleLogin: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const LoginContainer = ({ handleLogin }: LoginContainerProps) => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4'>
      <Card className='w-full max-w-md shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
        <CardHeader className='text-center space-y-4 pb-6'>
          <div className='mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg'>
            <span className='text-white font-bold text-xl'>Logo</span>
          </div>
          <div>
            <CardTitle className='text-2xl font-bold text-slate-800 mb-2'>
              System1
            </CardTitle>
            <CardDescription className='text-slate-600 text-sm leading-relaxed'>
              {'Đăng nhập vào <hệ thống 1>'}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className='space-y-4 pt-0'>
          <div className='bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6'>
            <div className='flex items-center gap-2 text-blue-700'>
              <Lock className='w-4 h-4' />
              <span className='text-sm font-medium'>
                Tính năng yêu cầu xác thực
              </span>
            </div>
            <p className='text-blue-600 text-xs mt-1'>
              Vui lòng đăng nhập hoặc tạo tài khoản mới để truy cập
            </p>
          </div>

          <div className='space-y-3'>
            <Button
              onClick={handleLogin}
              className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors duration-200'
            >
              <User className='w-4 h-4 mr-2' />
              Đăng nhập
            </Button>
          </div>

          <div className='text-center pt-4'>
            <p className='text-xs text-slate-500'>
              Bằng cách tiếp tục, bạn đồng ý với điều khoản sử dụng của chúng
              tôi
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginContainer;
