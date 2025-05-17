import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React from 'react';

const NewLatter = () => {
    return (
        <section className="bg-primary/5 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-text mb-2">Subscribe to Our Newsletter</h2>
        <p className="text-muted-foreground mb-6">
          Get exclusive offers, updates, and 10% off your first order!
        </p>

        <Card className="bg-white shadow-md border border-gray-200 p-6 rounded-2xl">
          <CardContent className="flex flex-col sm:flex-row items-center gap-4 p-0">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 text-sm px-4 py-2 rounded-md border border-gray-300"
            />
            <Button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 w-full sm:w-auto">
              Subscribe
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
    );
};

export default NewLatter;